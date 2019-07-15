const url = 'https://www.instagram.com/graphql/query/?'
let query_hash = 'c76146de99bb02f6415203be841dd25a'
let variables_json = {"id":"XXXXXXXX","include_reel":true,"fetch_mutual":false,"first":100}
let variables = encodeURIComponent(JSON.stringify(variables_json))

let followers_array = []
let after = ''
fetch( url + 'query_hash=' + query_hash + '&variables=' + variables )
.then(res => res.json())
.then(json => {
	for(const k in json.data.user.edge_followed_by.edges){
		followers_array.push(
			json.data.user.edge_followed_by.edges[k].node.username
			+ ' / '
			+ json.data.user.edge_followed_by.edges[k].node.full_name
			+ ' / '
			+ json.data.user.edge_followed_by.edges[k].node.id
		)
	}		
	after = json.data.user.edge_followed_by.page_info.end_cursor
	variables_json.after = after
	variables = encodeURIComponent(JSON.stringify(variables_json))
})
.then(()=>{
	fetch( url + 'query_hash=' + query_hash + '&variables=' + variables )
	.then(res => res.json())
	.then(json => {
		for(const k in json.data.user.edge_followed_by.edges){
			followers_array.push(
				json.data.user.edge_followed_by.edges[k].node.username
				+ ' / '
				+ json.data.user.edge_followed_by.edges[k].node.full_name
				+ ' / '
				+ json.data.user.edge_followed_by.edges[k].node.id
			)
		}		
		after = json.data.user.edge_followed_by.page_info.end_cursor
		variables_json.after = after
		variables = encodeURIComponent(JSON.stringify(variables_json))
	})
	.then(()=>{
		fetch( url + 'query_hash=' + query_hash + '&variables=' + variables )
		.then(res => res.json())
		.then(json => {
			for(const k in json.data.user.edge_followed_by.edges){
				followers_array.push(
					json.data.user.edge_followed_by.edges[k].node.username
					+ ' / '
					+ json.data.user.edge_followed_by.edges[k].node.full_name
					+ ' / '
					+ json.data.user.edge_followed_by.edges[k].node.id
				)
			}		
			after = json.data.user.edge_followed_by.page_info.end_cursor
			variables_json.after = after
			variables = encodeURIComponent(JSON.stringify(variables_json))
		})
		.then(()=>{
			fetch( url + 'query_hash=' + query_hash + '&variables=' + variables )
			.then(res => res.json())
			.then(json => {
				for(const k in json.data.user.edge_followed_by.edges){
					followers_array.push(
						json.data.user.edge_followed_by.edges[k].node.username
						+ ' / '
						+ json.data.user.edge_followed_by.edges[k].node.full_name
						+ ' / '
						+ json.data.user.edge_followed_by.edges[k].node.id
					)
				}		
				after = json.data.user.edge_followed_by.page_info.end_cursor
				variables_json.after = after
				variables = encodeURIComponent(JSON.stringify(variables_json))
			})
			.then(()=>{
				fetch( url + 'query_hash=' + query_hash + '&variables=' + variables )
				.then(res => res.json())
				.then(json => {
					for(const k in json.data.user.edge_followed_by.edges){
						followers_array.push(
							json.data.user.edge_followed_by.edges[k].node.username
							+ ' / '
							+ json.data.user.edge_followed_by.edges[k].node.full_name
							+ ' / '
							+ json.data.user.edge_followed_by.edges[k].node.id
						)
					}		
					after = json.data.user.edge_followed_by.page_info.end_cursor
					variables_json.after = after
					variables = encodeURIComponent(JSON.stringify(variables_json))
				})
				.then(()=>{
					fetch( url + 'query_hash=' + query_hash + '&variables=' + variables )
					.then(res => res.json())
					.then(json => {
						for(const k in json.data.user.edge_followed_by.edges){
							followers_array.push(
								json.data.user.edge_followed_by.edges[k].node.username
								+ ' / '
								+ json.data.user.edge_followed_by.edges[k].node.full_name
								+ ' / '
								+ json.data.user.edge_followed_by.edges[k].node.id
							)
						}		
						after = json.data.user.edge_followed_by.page_info.end_cursor
						variables_json.after = after
						variables = encodeURIComponent(JSON.stringify(variables_json))
					})
					.then(()=>{
						console.log(followers_array.join('\n'))
					})	
				})
			})
		})
	})
})
