from bson import ObjectId
from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
import os
import urllib.parse
from flask_cors import CORS
from checkanswer import process_images 

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# URL-encode the password
password = urllib.parse.quote_plus('mongodb123')

# Set the MONGO_URI with the encoded password
app.config['MONGO_URI'] = f'mongodb+srv://madhuram2modi3110:{password}@cluster0.i0wl1np.mongodb.net/images?retryWrites=true&w=majority'
mongo = PyMongo(app)

@app.route('/api/upload', methods=['POST'])
def upload_images_route():
    original_image = request.files.get('originalImage')
    student_image = request.files.get('studentImage')

    if not (original_image and student_image):
        response_data = {'message': 'Both originalImage and studentImage are required.'}
        return jsonify(response_data), 400

    try:
        result = process_images(original_image, student_image)
        
        # Assuming result is a dictionary with processed data

        # Insert the result into MongoDB
        result_collection = mongo.db.results  # Adjust the collection name as needed
        result_id = result_collection.insert_one(result).inserted_id

        response_data = {
            'message': 'Images uploaded and processed successfully',
            'result_id': str(result_id)
        }
        return jsonify(response_data), 200

    except Exception as e:
        response_data = {'message': f'Upload and processing failed: {str(e)}'}
        return jsonify(response_data), 500

def get_results():
    try:
        # Get all results from the MongoDB collection
        result_collection = mongo.db.results  # Adjust the collection name as needed
        results = list(result_collection.find({}))

        # Convert ObjectId to string for JSON serialization
        for result in results:
            result['_id'] = str(result['_id'])

        response_data = {'results': results}
        return jsonify(response_data), 200

    except Exception as e:
        response_data = {'message': f'Error fetching results: {str(e)}'}
        return jsonify(response_data), 500

if _name_ == '__main__':
    app.run()