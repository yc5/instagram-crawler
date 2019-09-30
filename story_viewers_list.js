var url = 'https://www.instagram.com/graphql/query/?'

// Story Viewer
var query_hash = '42c6ec100f5e57a1fe09be16cd3a7021'

var variables = { "item_id": "0000000000000000000", "story_viewer_fetch_count": 50, "story_viewer_cursor": 0 }

var viewers_array = []

fetch(url + 'query_hash=' + query_hash + '&variables=' + encodeURIComponent(JSON.stringify(variables)))
    .then(res => res.json())
    .then(json => {
        for (const k in json.data.media.edge_story_media_viewers.edges) {
            viewers_array.push(
                json.data.media.edge_story_media_viewers.edges[k].node.username
                + ' / '
                + json.data.media.edge_story_media_viewers.edges[k].node.id
            )
        }
        variables.story_viewer_cursor += 50;
    })
    .then(() => {
        fetch(url + 'query_hash=' + query_hash + '&variables=' + encodeURIComponent(JSON.stringify(variables)))
            .then(res => res.json())
            .then(json => {
                for (const k in json.data.media.edge_story_media_viewers.edges) {
                    viewers_array.push(
                        json.data.media.edge_story_media_viewers.edges[k].node.username
                        + ' / '
                        + json.data.media.edge_story_media_viewers.edges[k].node.id
                    )
                }
                variables.story_viewer_cursor += 50;
            })
            .then(() => {
                fetch(url + 'query_hash=' + query_hash + '&variables=' + encodeURIComponent(JSON.stringify(variables)))
                    .then(res => res.json())
                    .then(json => {
                        for (const k in json.data.media.edge_story_media_viewers.edges) {
                            viewers_array.push(
                                json.data.media.edge_story_media_viewers.edges[k].node.username
                                + ' / '
                                + json.data.media.edge_story_media_viewers.edges[k].node.id
                            )
                        }
                        variables.story_viewer_cursor += 50;
                    })
                    .then(() => {
                        console.log(viewers_array.join('\n'))
                    })

            })
    })

