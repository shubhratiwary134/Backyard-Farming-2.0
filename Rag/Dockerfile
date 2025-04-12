# Use the CUDA-enabled Python base image (choose the appropriate version)
FROM nvidia/cuda:11.0-runtime-ubuntu20.04

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container
COPY . .

# Install Python 3.11
RUN apt-get update && apt-get install -y python3.11 python3.11-dev python3.11-distutils

# Set up pip for Python 3.11
RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
RUN python3.11 get-pip.py

# Upgrade pip and install dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Command to run the app
CMD ["python3.11", "api.py"]
