var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('name', { type: String, required: false });
  },

  initializing: function () {
    this.props = {};
  },

  prompting: function () {
    var prompts = [{
      type: 'input',
      name: 'remUnit',
      message: 'set rem unit',
      default: 64,
    },{
      type: 'input',
      name: 'baseDpr',
      message: 'set base dpr',
      default: 2,
    }];

    return this.prompt(prompts).then(function (props) {
      this.props.remUnit = props.remUnit;
      this.props.baseDpr = props.baseDpr;
    }.bind(this));
  },

  default: function () {
    if (this.name) {
      mkdirp(this.name);
      this.destinationRoot(this.destinationPath(this.name));
    }
  },

  writing: {
    gulpfile: function () {
      this.fs.copyTpl(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js'),
        {
          remUnit: this.props.remUnit,
          baseDpr: this.props.baseDpr,
        }
      );
    },

    packageJSON: function () {
      this.fs.copy(
        this.templatePath('package.json'),
        this.destinationPath('package.json'));
    },

    git: function () {
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore'));
    },

    styles: function () {
      this.fs.copy(
        this.templatePath('sass'),
        this.destinationPath('sass'));
    },

    html: function () {
      this.fs.copy(
        this.templatePath('index.html'),
        this.destinationPath('index.html'));
    },

    'lib-flexible': function () {
      this.fs.copy(
        this.templatePath('lib-flexible'),
        this.destinationPath('lib-flexible'));
    },
  },
});