from dataclasses import fields
from app_auth.models import User
from .models import RecruiterProfile
from rest_framework.serializers import Serializer,ModelSerializer
from .models import SeekerProfile, RecruiterProfile

class SeekerProfileSerializer(ModelSerializer):
    class Meta:
        model = SeekerProfile
        fields = '__all__'

class RecruiterProfileSerializer(ModelSerializer):
    class Meta:
        model = RecruiterProfile
        fields = '__all__'

class PublicRecruiterProfileSerializer(Serializer):
    class RecruiterProfileSerial(ModelSerializer):
        class Meta:
            model = RecruiterProfile
            fields = ('bio','phone','picture','address')
    class UserSerial(ModelSerializer):
        class Meta:
            model = User
            fields = ('user_type','email','username','first_name','last_name')
    recruiter = RecruiterProfileSerial(read_only=True)
    # company = CompanySerial(read_only=True)
    user = UserSerial(read_only=True)

class PublicSeekerProfileSerializer(Serializer):
    class SeekerProfileSerial(ModelSerializer):
        class Meta:
            model = SeekerProfile
            fields = ('bio','phone','picture','address')
    class UserSerial(ModelSerializer):
        class Meta:
            model = User
            fields = ('user_type','email','username','first_name','last_name')
    seeker = SeekerProfileSerial(read_only=True)
    user = UserSerial(read_only=True)