// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
/*process.env.NO_PROXY = "localhost, 0.0.0.0/4201, 0.0.0.0/9876";
if (!process.env.CHROME_BIN) {
  process.env.CHROME_BIN = require("puppeteer").executablePath();
} else {
  process.env.CHROME_BIN = require("puppeteer").executablePath();
}*/

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      jasmine: {
        random: false,
        failFast: true
      }
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "./coverage/rotativo-app"),
      reports: ["html", "lcovonly", "text-summary"],
      fixWebpackSourcePaths: true,
    },
    reporters: ["progress", "kjhtml", "coverage-istanbul"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ["HeadlessChrome"],
    customLaunchers: {
      HeadlessChrome: {
        base: "ChromeHeadless",
        flags: [
          "--headless",
          '--disable-gpu',
          "--remote-debugging-port=9222",
          "--no-sandbox",
          "--proxy-server='direct://'",
          "--proxy-bypass-list=*",
          '--disable-web-security',
          '--disable-site-isolation-trials'
        ]
      }
    },
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 600000,
    singleRun: true,
    restartOnFileChange: false
  });
};
