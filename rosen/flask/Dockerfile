FROM python:3.9

WORKDIR /app/flask

ENV FLASK_APP=app.py

COPY requirements.txt /app/flask

RUN pip3 install -r requirements.txt
RUN apt-get update
RUN apt-get install ffmpeg libsm6 libxext6  -y

COPY . .

EXPOSE 5000

ENTRYPOINT [ "python" ]

CMD [ "app.py" ]