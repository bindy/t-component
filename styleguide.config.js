const path = require('path')
module.exports = {
	// set your styleguidist configuration here
	// tocMode: 'collapse',
	pagePerSection: true,
	title: 'TComponent Style Guide',
	// components: 'src/components/**/[A-Z]*.vue',
	// defaultExample: true,
	compilerConfig:{
		transforms:{
			asyncAwait:false
		}
	},
	sections: [
		{
            name: "Introduce",
            content:'./examples/docs/Basic.md',
        },
		{
			name: 'Basic',
			components:function () {
				return [
					'./packages/TButton/src/TButton.vue',
					'./packages/TIcon/src/TIcon.vue',
					'./packages/TRow/src/TRow.vue',
					'./packages/TCol/src/TCol.vue',
					'./packages/TImage/src/TImage.vue',
				]
			}
		},
		{
			name: 'Form',
			// content:'./examples/docs/Form.md',
			components:function () {
				return [
				'./packages/TRadioGroup/src/TRadioGroup.vue',
				'./packages/TSelect/src/TSelect.vue',
				'./packages/TMultiSelect/src/TMultiSelect.vue',
				'./packages/TSwitch/src/TSwitch.vue',
				'./packages/TDatePicker/src/TDatePicker.vue',
				'./packages/TForm/src/TForm.vue',
				'./packages/TFormItem/src/TFormItem.vue'
			]}
		},
		{
			name: 'Data',
			// content:'./examples/docs/Form.md',
			components:function () {
				return [
				'./packages/TList/src/TList.vue',
				'./packages/TTable/src/TTable.vue',
				'./packages/TTimeline/src/TTimeline.vue',
				'./packages/TTimelineItem/src/TTimelineItem.vue',
			]}
			
		},
		{
			name: 'Feedback',
			content:'./examples/docs/Feedback.md',
			
			
		},

	],
	require: [
		path.join(__dirname, './examples/styleguide/global.requires.js'),
		path.join(__dirname, './examples/styleguide/style.css')

	],
	webpackConfig: {
	  // custom config goes here
	  output: {
	  	path:'/t-component-ui-guide',
		publicPath:''
	  }
	},
	
	// exampleMode: 'expand',
	defaultExample: false,
	// serverPort:6666
}
