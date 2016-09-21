'use strict';
var _ = require('lodash');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

    constructor: function(){
      yeoman.Base.apply(this, arguments);
      this.argument('componentName', {type: String, required: true});
      this.componentName = _.upperFirst(_.camelCase(this.componentName));
    },


  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the pioneering ' + chalk.red('generator-react-c') + ' generator!'
    ));

/*

    var prompts = [
    {
      type: 'input',
      name: 'componentName',
      message: 'Component name (camelCase)',
      when : function(){
        return this.componentName != false;
      },
      default: this.componentName
    },
    {
      type: 'input',
      name: 'componentDir',
      message: 'Where do you want to generate your components?',
      default: '',
      store: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.componentName = props.componentName;
      this.componentDir = props.componentDir;
      this.props = props;
    }.bind(this));
    */
  },

  writing: function () {


    var options = {
      componentName : this.componentName
    }
    var files = [
      'index.js',
      'messages.js',
      'index.test.js',
      'style.css'
    ];

    files.forEach(function(file){
      this.fs.copyTpl(
      this.templatePath(file),
      this.destinationPath(this.componentName + '/' + file),
      options
      );  
    }.bind(this));
    
  },

  install: function () {
    //this.installDependencies();
  },

  end: function(){
  	this.log(this.componentName, " was generated. Goodbye!");
  }
});
