import chalk from "chalk";

class Logger {
  log(message = "") {
    if (message) {
      console.log(`${message}`);
    }
  }

  info(message) {
    this.log(chalk.blue(message));
  }

  success(message) {
    this.log(chalk.green(message));
  }

  warn(message) {
    this.log(chalk.yellow(message));
  }

  error(error) {
    this.log(chalk.red(error));
  }
}

export default new Logger();
