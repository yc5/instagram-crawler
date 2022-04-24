import requests
import json
import urllib.parse

main_user_id = 'MAIN_USER_ID'
session_id = 'SESSION_ID'

my_headers = {
    'X-IG-App-ID': '936619743392459',
    'Cookie': 'sessionid=' + session_id
}
count = 0


def list_friendships(id, max=""):
    params = {
        'count': 100,
        'search_surface': 'follow_list_page',
        'max_id': str(max)
    }
    r = requests.get('https://i.instagram.com/api/v1/friendships/' +
                     id + '/followers/', params=params, headers=my_headers)
    r = r.json()

    for x in r['users']:
        pk = x['pk']
        full_name = x['full_name']
        username = x['username']
        is_private = x['is_private']

        print('%s,%s,%s,%s' % (pk, full_name, username, is_private))
        global count
        count += 1

    if 'next_max_id' in r:
        list_friendships(id, r['next_max_id'])


list_friendships(main_user_id)
print(main_user_id, "count:", count)
