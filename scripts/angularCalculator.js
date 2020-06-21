'use strict'

var app = angular.module("calculator", []);

app.controller("calculatorCtrl", function($scope){

	$scope.numArr = [];
	$scope.modifiers = ['+','-','*','/']
	$scope.firstValue = "";
	$scope.secondValue = "";
	$scope.currentModifier = "";

	var valueFlag = false;


	for (var i = 9; i >= 0; i--) {
		$scope.numArr.push(i);
	}

	function currentValueToShow(num){
		assignValues(num);
	}

	function assignValues(num){
		if (valueFlag) {
			$scope.secondValue += num;
		}
		else {
			$scope.firstValue += num;
		}
	}

	$scope.showNumber = currentValueToShow;


	function activateFlag(){
		valueFlag = true;
	}

	function setCurrentmodifier(modifier){
		activateFlag();
		$scope.currentModifier = modifier;

	}

	$scope.makeSecondValue = setCurrentmodifier;

	function evalMath() {

		if($scope.firstValue != '' && $scope.secondValue != '') {

			var mathFormat = $scope.firstValue + $scope.currentModifier + $scope.secondValue;
			$scope.result = eval(mathFormat);
		}
	}

	$scope.domath = evalMath;


	function clearScope() {
       valueFlag = false;
       $scope.firstValue = '';
       $scope.secondValue = '';
       $scope.currentModifier = '';
       $scope.result = '';
   }

   $scope.clearNumbers = clearScope;



});