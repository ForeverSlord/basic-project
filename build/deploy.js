const path = require('path')
const child_process = require('child_process')

const resolve = require('./utils/resolve')
const buildDir = resolve('./dist')

const env = process.env.NODE_DEV || 'development'
const repoBranch = `publish/${env}`
const repoUrl = 'git@gitee.com:cupshe/american_background.git'

function git(...args) {
  return new Promise((resolve, reject) => {
    let child = child_process.spawn('git', args, {
      cwd: buildDir,
    })
    child.stderr.on('data', data => {
      console.log(data.toString())
    })
    child.stdout.on('data', data => {
      console.log(data.toString())
    })
    child.on('exit', code => {
      if (code !== 0) {
        return reject()
      }

      return resolve()
    })
  })
}

git('init')
  .then(() => git('add', '-A'))
  .then(() => git('commit', '-m', `deploy at ${new Date()}`))
  .then(() => git('push', '-u', repoUrl, `HEAD:${repoBranch}`, '--force'))
  .then(() => {
    process.exit()
  })
