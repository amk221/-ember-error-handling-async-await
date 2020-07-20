import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupOnerror, resetOnerror } from '@ember/test-helpers';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    assert.expect(0);

    // We know the application will error in this test, but that's OK,
    // we want to specifically test the error state so that the test
    // doesn't fail.
    setupOnerror(error => {
      if (error === 'failed') {
        return;
      }

      throw error;
    });

    await visit('/');

    await click('button');

    resetOnerror();
  });
});
