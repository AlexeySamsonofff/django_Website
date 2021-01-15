from datetime import datetime, timedelta

class Orders(object):

    def estimate_dispatch(self):
        n = 3
        Est = datetime.now() + timedelta(days=3)
        Est = Est.strftime('%Aa %d %B %Y')
        return Est