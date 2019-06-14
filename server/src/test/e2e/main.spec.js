import * as fs from 'fs-extra'
import * as path from 'path'

describe('main', () => {
  it('can test', async () => {
    await fs.copy(path.resolve(__dirname, '../fixtures/simple-two-fix'), path.resolve(__dirname, '../tmp'))
  })
})

