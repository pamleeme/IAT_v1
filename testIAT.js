define(['pipAPI', 'https://github.com/pamleeme/IAT_v1/blob/main/IATAPI.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Male', //Will appear in the data.
			title : {
				media : {word : 'Male'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'Male1.jpg'}, 
    			{image : 'Male2.jpg'}, 
    			{image : 'Male3.jpg'}, 
    			{image : 'Male4.jpg'}, 
    			{image : 'Male5.jpg'}, 
    			{image : 'Male6.jpg'},
			{image : 'Male7.jpg'},	
			{image : 'Male8.jfif'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Female', //Will appear in the data.
			title : {
				media : {word : 'Female'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'Female1.jpg'}, 
    			{image : 'Female2.jpg'}, 
    			{image : 'Female3.jpg'}, 
    			{image : 'Female4.jpg'}, 
    			{image : 'Female5.jpg'}, 
    			{image : 'Female6.jpg'}			
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://github.com/pamleeme/IAT_v1/tree/main/images/'
		} 
	});
});
