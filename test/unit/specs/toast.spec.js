import Toast from 'packages/toast';

describe('Toast', () => {
  afterEach(() => {
    Toast.clear();
  });

  it('create a empty toast', () => {
    Toast();
    expect(document.querySelector('.vu-toast-wrapper')).to.exist;
  });

  it('create a toast', () => {
    const toast = Toast('toast');

    expect(document.querySelector('.vu-toast-wrapper')).to.exist;
    expect(toast.message).to.equal('toast');
    expect(toast.type).to.equal('text');
    expect(toast.displayStyle).to.equal('text');
    expect(typeof toast.timer).to.equal('number');
  });

  it('create a loading toast', () => {
    const toast = Toast.loading();

    expect(document.querySelector('.vu-toast-wrapper')).to.exist;
    expect(toast.type).to.equal('loading');
  });

  it('create a options loading toast', () => {
    const toast = Toast.loading({
      message: 'toast'
    });

    expect(document.querySelector('.vu-toast-wrapper')).to.exist;
    expect(toast.message).to.equal('toast');
    expect(toast.type).to.equal('loading');
  });

  it('create a success toast', () => {
    const toast = Toast.success('success');

    expect(document.querySelector('.vu-toast-wrapper')).to.exist;
    expect(toast.displayStyle).to.equal('default');
    expect(toast.type).to.equal('success');
  });

  it('create a options success toast', () => {
    const toast = Toast.success({
      message: 'toast'
    });

    expect(document.querySelector('.vu-toast-wrapper')).to.exist;
    expect(toast.message).to.equal('toast');
    expect(toast.type).to.equal('success');
  });

  it('create a fail toast', () => {
    const toast = Toast.fail('fail');

    expect(document.querySelector('.vu-toast-wrapper')).to.exist;
    expect(toast.displayStyle).to.equal('default');
    expect(toast.type).to.equal('fail');
  });

  it('create a options fail toast', () => {
    const toast = Toast.fail({
      message: 'toast'
    });

    expect(document.querySelector('.vu-toast-wrapper')).to.exist;
    expect(toast.message).to.equal('toast');
    expect(toast.type).to.equal('fail');
  });

  it('create a forbidClick toast', (done) => {
    Toast({
      message: 'test',
      forbidClick: true
    });

    expect(document.querySelector('.vu-toast-wrapper')).to.exist;
    setTimeout(() => {
      expect(document.querySelector('.vu-toast__overlay')).to.exist;
      done();
    }, 50);
  });

  it('toast disappeared after duration', (done) => {
    Toast({
      message: 'toast',
      duration: 10
    });

    expect(document.querySelector('.vu-toast-wrapper').style.display === 'none').to.be.false;

    setTimeout(() => {
      expect(document.querySelector('.vu-toast-wrapper').style.display === 'none').to.be.true;
      done();
    }, 500);
  });

  it('toast duration 0', (done) => {
    Toast({
      message: 'toast',
      duration: 0
    });

    setTimeout(() => {
      expect(document.querySelector('.vu-toast-wrapper').style.display === 'none').to.be.false;
      done();
    }, 500);
  });
});
