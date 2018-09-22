int findKnumber(int a[], int m, int b[], int n,int k) {
	if (m > n)		//使a数组都是更短的那个数组
		findKnumber(b, n, a, m, k);
	else {
		if (m == 0)		//当a数组为空时，第k小的数组就是b[k-1]
			return b[k - 1];
		if (k == 1)		//当k为1时,就是比a数组和b数组首元素更小值
			return min(a[0],b[0]);
		int pa = min(m,k/2), pb = k - pa;
		if (a[pa - 1] < b[pb - 1])
			return findKnumber(a + pa, m - pa, b, n, k - pa);
		else if (a[pa - 1] > b[pb - 1])
			return findKnumber(a, m, b + pb, n - pb, k - pb);
		else
			return a[pa - 1];
	}
    return;
}	


double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size) {
	int sum = nums1Size + nums2Size;
	if (sum % 2 == 0)
		return (findKnumber(nums1, nums1Size, nums2, nums2Size, sum / 2) + findKnumber(nums1, nums1Size, nums2, nums2Size, sum / 2 + 1)) / 2.0;
	else
		return findKnumber(nums1, nums1Size, nums2, nums2Size, sum / 2 + 1);
}