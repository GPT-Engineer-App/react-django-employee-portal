from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    try:
        user = User.objects.get(email=email)
        return Response({"message": f"Welcome {user.name}"}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({"message": "Invalid email"}, status=status.HTTP_400_BAD_REQUEST)