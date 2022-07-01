Add the versions you want to test in package.json and index.js, then run

~~~js
yarn test
~~~


Example output:

~~~
yarn run v1.22.19
$ node index.js
= 1d medium
173202 (sliced copy): 272.4ms
65942a (circular buffer): 452.4ms

= 1d large
173202 (sliced copy): 423.0ms
65942a (circular buffer): 446.6ms

= 1d huge
173202 (sliced copy): 549.2ms
65942a (circular buffer): 535.0ms

= 2d medium
173202 (sliced copy): 236.6ms
65942a (circular buffer): 350.4ms

= 2d large
173202 (sliced copy): 359.4ms
65942a (circular buffer): 351.4ms

= 2d huge
173202 (sliced copy): 946.2ms
65942a (circular buffer): 683.2ms

====

{
  '173202 (sliced copy)': 2786.838706985116,
  '65942a (circular buffer)': 2819.0182500183582
}
Done in 12.25s.
~~~
