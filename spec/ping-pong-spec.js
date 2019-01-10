import {pingPong} from '../src/ping-pong'

describe('Ping-Pong', function() {
  it('should return no ping pong on 1', function() {
    var output = pingPong(1);
    expect(output.length).toEqual(1);
    expect(output[0]).toEqual(1);
  });

  it('should return no ping pong on 2', function() {
    var output = pingPong(2);
    expect(output.length).toEqual(2);
    expect(output[0]).toEqual(1);
    expect(output[1]).toEqual(2);
  });

  it('should return no ping pong on 3', function() {
    var output = pingPong(3);
    expect(output.length).toEqual(3);
    expect(output[0]).toEqual(1);
    expect(output[1]).toEqual(2);
    expect(output[2]).toEqual('ping');
  });
});