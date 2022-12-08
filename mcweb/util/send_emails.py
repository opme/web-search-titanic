import threading
from django.core.mail import send_mail, EmailMessage
from django.template.loader import render_to_string


# adapted with help from https://github.com/CryceTruly/django-tutorial-youtube/tree/main/templates Cryce Truly
class EmailThread(threading.Thread):

    def __init__(self, email):
        self.email = email
        threading.Thread.__init__(self)
    
    def run(self):
        self.email.send()


def send_email(mail_params):
    subject, body, from_email, recepient = mail_params
    print(mail_params)
    try:
        send_mail(subject, body, from_email, [recepient], fail_silently=False)
    except Exception as e: 
        print(e)


def send_signup_email(user, request):
    email_body = render_to_string('authentication/activate.html', {
        'user': user,
    })
    email = EmailMessage(subject='[Media Cloud] Thank you for signing up for Media Cloud',
                         body=email_body,
                         from_email='noreply@mediacloud.org',
                         to=[user.email])
    try: 
        EmailThread(email).start()
    except Exception as e:
        print(e)


def send_source_upload_email(title: str, text: str, to: str):
    send_mail(title, text, 'system@mediacloud.org', [to], fail_silently=False)