
const componentName = 'testComponent';
const fileName = 'kunai-ui-test-component';

angular.module(componentName, [])
    .component(componentName, {
        templateUrl: `${root}${componentName}/${fileName}.html`,
        bindings: {
            literalParemeter: '@?',           
            bidirectionalParemeter : '=?',
            onewayParemeter : '<?'
        },
        controller: function () {
            let ctrl = this;
			console.info("controller")
            ctrl.$onInit = function () {
				console.log('Initial onewayParemeter');
				console.info(ctrl.onewayParemeter);
				console.log('Initial bidirectionalParemeter');
				console.info(ctrl.bidirectionalParemeter)

            };
			ctrl.validate = function(){
				
				console.log('validate called')				
				ctrl.onewayParemeter = angular.isString(ctrl.bidirectionalParemeter) && ctrl.bidirectionalParemeter.length > 0
				console.log(ctrl.onewayParemeter )				

			}
        }
    });

export default componentName;
