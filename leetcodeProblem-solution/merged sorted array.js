
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  for(let i=0; i<merged.length; i++) {
      nums1[i] = merged[i];
  }
};