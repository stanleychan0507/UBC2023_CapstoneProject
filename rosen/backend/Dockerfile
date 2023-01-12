FROM python:3

WORKDIR /app/flask

ENV FLASK_APP=api.py

COPY requirements.txt /app/flask

RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 5000

ENTRYPOINT [ "python" ]

CMD [ "api.py" ]