'use strict';
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
	constructor: function () {
		this.argument('componentName', {type: String, required: true});
		this.componentName = _.camelCase(this.componentName);
	},

  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the pioneering ' + chalk.red('generator-react-c') + ' generator!'
    ));

/*
    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Component name (camelCase)',
      default: 'someComponent'
    }];
*/
    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath( this.componentName + 'index.js')
    );
  },

  install: function () {
    this.installDependencies();
  },

  end: function(){
  	this.log(this.componentName, " was generated. Goodbye!");
  }
});
