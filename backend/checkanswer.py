import cv2
import numpy as np
from recog import perform_ocr 
from recog import process_text

def process_images(original_image, student_image):
    try:
        # Read the uploaded images
        recog_text = perform_ocr(student_image)
        process_text(recog_text)
        

    except Exception as e:
        print('Error processing images:', e)
        return None
