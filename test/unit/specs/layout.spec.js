import { mount } from 'avoriaz';
import Col from 'packages/col';
import Row from 'packages/row';
import RowTestComponent from '../components/row';

describe('Layout', () => {
  let wrapper;
  afterEach(() => {
    wrapper && wrapper.destroy();
  });

  it('create a simple row', () => {
    wrapper = mount(Row);

    expect(wrapper.hasClass('vu-row')).to.be.true;
    expect(wrapper.vm.style).to.be.empty;
  });

  it('create a simple column', () => {
    wrapper = mount(Col, {
      propsData: {
        span: 8,
        offset: 8
      }
    });
    expect(wrapper.hasClass('vu-col')).to.be.true;
    expect(wrapper.hasClass('vu-col-8')).to.be.true;
    expect(wrapper.hasClass('vu-col-offset-8')).to.be.true;
    expect(wrapper.vm.gutter).to.equal(0);
  });

  it('create a gutter row', () => {
    wrapper = mount(RowTestComponent);
    const row = wrapper.find(Row)[0];
    const column = wrapper.find(Col)[0];
    expect(row.hasStyle('margin-left', '-5px')).to.be.true;
    expect(row.hasStyle('margin-right', '-5px')).to.be.true;
    expect(column.hasStyle('padding-left', '5px')).to.be.true;
    expect(column.hasStyle('padding-right', '5px')).to.be.true;
  });
});
