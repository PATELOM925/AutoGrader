import cv2
import pytesseract
from PIL import Image
import numpy as np

pytesseract.pytesseract.tesseract_cmd = 'D:\Program Files\Tesseract-OCR'

def preprocess_image(image_path):
    # Read the image using OpenCV
    image = cv2.imread(image_path, 0)  # Read as grayscale

    # Apply adaptive thresholding
    binary_image = cv2.adaptiveThreshold(image, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 2)

    # Find contours in the binary image
    contours, _ = cv2.findContours(binary_image, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Filter contours based on area to exclude small noise
    min_contour_area = 100
    filtered_contours = [cnt for cnt in contours if cv2.contourArea(cnt) > min_contour_area]

    # Draw contours on the original image (for visualization purposes)
    segmented_image = cv2.drawContours(cv2.cvtColor(image, cv2.COLOR_GRAY2BGR), filtered_contours, -1, (0, 255, 0), 2)

    return segmented_image

# Function to perform OCR on the input image
def perform_ocr(image):
    # Convert the image file object to a NumPy array
    image_np = np.frombuffer(image.read(), np.uint8)

    segmented_image = preprocess_image(image_np)
    # Perform OCR using Tesseract
       # Perform OCR using Tesseract
    recognized_text = pytesseract.image_to_string(segmented_image, config='--psm 6')
    
    return recognized_text



# Function to process the recognized text using NLP techniques
def process_text(recognized_text):
    # Add your NLP processing code here
    # For example, you can use spaCy or NLTK for tokenization, named entity recognition, etc.
    # For simplicity, let's just print the recognized text for now
    print("Recognized Text: ", recognized_text)

