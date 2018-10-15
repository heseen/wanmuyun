a = []
a.append(1)
a.append(2)
a.append(3)
a.append('d')

print(a)


import tushare as ts
print(ts.get_hist_data('600848')) #一次性获取全部日k线数据
