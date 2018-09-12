/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        if(l1 == nullptr)  return l2;
        if(l2 == nullptr)  return l1;

        ListNode* dummyHead = new ListNode(0);
        ListNode* curr = dummyHead;
        int carry = 0, val = 0;
        while(l1 && l2) {
            val = carry + l1->val + l2->val;
            carry = val / 10;
            curr->next = new ListNode(val % 10);
            curr = curr->next;
            l1 = l1->next;
            l2 = l2->next;
        }
        if(l1 or l2)    curr->next = addTwoNumbers(new ListNode(carry), l1 ? l1 : l2);
        else if(carry != 0)  
            curr->next = new ListNode(carry);

        return dummyHead->next;
    }
};