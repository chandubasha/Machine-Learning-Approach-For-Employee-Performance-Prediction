from flask_restful import Resource, reqparse
from flask_jwt_extended import create_access_token
from models import db, User

class UserLogin(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', required=True)
        parser.add_argument('password', required=True)
        args = parser.parse_args()

        user = User.query.filter_by(username=args['username']).first()
        if user and user.check_password(args['password']):
            access_token = create_access_token(identity=user.id)
            return {'access_token': access_token}, 200
        return {'message': 'Invalid credentials'}, 401
