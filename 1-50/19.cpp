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
     ListNode* removeNthFromEnd(ListNode* head, int n) {
         ListNode *pre = NULL, *cur = head;
         int counter = n;
         while (counter--) {
             pre = cur;
             cur = cur->next;
         }
         cur = head;
         if (pre->next == NULL)
             return head->next;
         while (pre->next->next) {
             cur = cur->next;
             pre = pre->next;
         }
         //此时pre->next为最后一个节点
         if (n == 1) 
             pre->next = NULL;
         else
             cur->next = cur->next->next;
         return head;
     }
        
};