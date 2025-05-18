#include<bits/stdc++.h>
#define pb push_back
#define mp make_pair
#define fastio ios_base::sync_with_stdio(false); cin.tie(nullptr);
#define ff first
#define ss second

#define int long long
#define vi vector<int>
#define vpii vector<pair<int,int>>
#define all(a) (a).begin(),(a).end()
#define nl endl
using namespace std;
 
bool fun(int mid,vi &a){
     int last=a[0];
     for(int i=0;i<a.size();i++){
         if(last>a[i]){
            a[i]+=mid;
            if(last>a[i]){
                return false;
            }else{
                last=a[i];
            }
         }
     }
     return true;
}


void solve(){
     int n;
     cin >> n;
     vi a(n);
     for(int i=0;i<n;i++){
        cin >> a[i];
     } 


     int lo=0,hi=1e9;
     int ans=INT_MAX;
     while(hi-lo>0){
        int mid=(lo+hi)/2;

        if(fun(mid,a)){
           hi=mid;
           ans=hi;
        }else{
           lo=mid+1;
        }
     }  
}


 
 
int32_t main(){
   fastio;
   int t=1;
  
   while(t--) solve();
 
return 0;
}