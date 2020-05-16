const n = 5e8, p = new Int8Array(n/2);
for ( let i=3; i*i<n; i+=2 ) if ( ! p[i>>1] ) for ( let j=i*i, k=i<<1; j<n; j+=k ) p[j>>1] = 1;
return { *stream() { yield 2; for ( let i=3; i<n; i+=2 ) if ( ! p[i>>1] ) yield i; } };
