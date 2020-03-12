# Grão Challenge

### Prerequisites

- Have node and npm installed
- `npm i`
  - This will install all dependencies

### Running
  - `npm start`
    - This will run with the default configuration
  - `npm run invest`
    - With this command configurations will be read from `config/config.json`, be sure to get create it using the template: `config/config.json.template`

### Configuration
  - initialValue: How much money you will start with
  - selic: how much is the selic rate right know
    - From 0 to 1
    - Annual rate
  - rentability: how much of the investment will the investor get
    - From 0 to 1
  - workingDays: how much work days there are this year
  - totalWeeks: how much time (in weeks) will the investor leave his money yielding

### Docker
  - `docker build -t <imageName> .`
  - `docker run <imageName>`

### Testing
  - `npm test`