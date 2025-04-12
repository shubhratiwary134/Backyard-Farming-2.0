
FROM nvidia/cuda:11.2-runtime-ubuntu20.04


WORKDIR /app


COPY . .


RUN apt-get update && apt-get install -y python3.11 python3.11-dev python3.11-distutils


RUN curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
RUN python3.11 get-pip.py


RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["python3.11", "api.py"]