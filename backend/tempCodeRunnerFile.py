from flask import Flask, request, jsonify
from flask_cors import CORS
# from checkanswer import process_images
from recog import perform_ocr 
from recog import process_text

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route('/api/upload', methods=['POST'])
def upload_images_route():
    original_image = request.files.get('originalImage')
    student_image = request.files.get('studentImage')

    if original_image and student_image:
        result =perform_ocr(student_image)
        process_text(result)
        
        if result:
            response_data = {'message': 'Images uploaded and processed successfully', 'result': result}
            return jsonify(response_data), 200

    response_data = {'message': 'Upload and processing failed'}
    return jsonify(response_data), 400

if __name__ == '__main__':
    app.run()
