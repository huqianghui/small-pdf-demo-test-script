# small pdf proces

客户给了一千多个文件，最大的12K，里面文字大概是7000作用的中文描述。而且文件名称都带日期，明显是实时资讯类的东西。

处理思路如下：

1） 文件不再按照页面切割，整个文件作为一条记录。这样较大的文件内容，使用gpt4作答，小内容可以使用chatgpt作答。

2） 在文件内容前面，补充日志说明。包括不同格式的日志，20210201， 2021年二月一号等，来丰富文本。

3） 老路子，需要改成中文分析器来建立所以。

4） 好客户问了好多问题，都没有找到正确的文件，估计要使用语义搜索来提高精确度。

5) 根据日志分到不同目录，这样可以通过并行去读。
<img width="468" alt="image" src="https://github.com/huqianghui/small-pdf-demo-test-script/assets/7360524/d0f80e9d-a89c-4d2d-8dfc-c9aa2ee853a9">

最终全部一个文档，变成一条记录也是azure cognitive search的一个document索引出来。
<img width="468" alt="image" src="https://github.com/huqianghui/small-pdf-demo-test-script/assets/7360524/43aee129-f6bd-44ec-a841-5d4e7a34c5bc">

