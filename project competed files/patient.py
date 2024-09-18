from flask_restful import Resource, reqparse
from models import db, Patient

class PatientResource(Resource):
    def get(self):
        patients = Patient.query.all()
        return [{'id': p.id, 'first_name': p.first_name, 'last_name': p.last_name, 'email': p.email} for p in patients], 200

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('first_name', required=True)
        parser.add_argument('last_name', required=True)
        parser.add_argument('email', required=True)
        args = parser.parse_args()

        patient = Patient(
            first_name=args['first_name'],
            last_name=args['last_name'],
            email=args['email']
        )
        db.session.add(patient)
        db.session.commit()
        return {'message': 'Patient added successfully'}, 201
