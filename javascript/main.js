$('.js-search').on('click', function() {
	const API_KEY = 'dc6zaTOxFJmzC';

	$.get('http://api.giphy.com/v1/gifs/search', {
		q: $('.js-search-query').val(),
		api_key: API_KEY,
		limit: 1,
	}).then(function(data) {
		const src = data.data[ 0 ].images.original.url;

		const gifImageHTML = `
<div class="ui centered card">
  <div class="image">
    <img src="${ src }">
  </div>
</div>
		`;

		$('.js-results').html( gifImageHTML );
	});
});