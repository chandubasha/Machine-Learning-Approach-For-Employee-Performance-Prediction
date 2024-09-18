from flask import Flask
from flask_restful import Api
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)
api = Api(app)

from resources.patient import PatientResource
from resources.appointment import AppointmentResource

api.add_resource(PatientResource, '/patients')
api.add_resource(AppointmentResource, '/appointments')

if __name__ == '__main__':
    app.run(debug=True)
