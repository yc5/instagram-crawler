import requests
import json
import urllib.parse

story_id = 'STORY_ID'
session_id = 'SESSION_ID'

my_headers = {    
    'X-IG-App-ID': '936619743392459',
    'Cookie': 'sessionid='+session_id
}
count = 0

def list_reel_media_viewer(id, max):
  params = {
      'include_blacklist_sample' : 'true',
      'max_id' : str(max)
  }
  r = requests.get('https://i.instagram.com/api/v1/media/'+id+'/list_reel_media_viewer/', params = params, headers = my_headers)
  r = r.json()

  for x in r['users']:
    pk = x['pk']
    full_name = x['full_name']
    username = x['username']
    is_private = x['is_private']

    print('%s,%s,%s,%s' % (pk, full_name, username, is_private))
    global count
    count += 1

  if r['next_max_id'] :
    list_reel_media_viewer(id, r['next_max_id'])


list_reel_media_viewer(story_id,0)
print(story_id, "count:" , count)
