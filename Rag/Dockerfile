FROM python:3.11

# Set the working directory inside the container
WORKDIR /app

# Copy only requirements.txt to leverage Docker cache
COPY requirements.txt .

# Install dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application files to the container
COPY . .

# Set the default command to run your application
CMD ["python", "api.py"]
