const footerLinks = ['隐私政策', '使用条款', '联系我们'];

export function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 畅研 · 材料科学可视化工具集 版权所有</p>
      <nav aria-label="页脚导航">
        {footerLinks.map((item) => (
          <a href="#" onClick={(event) => event.preventDefault()} key={item}>
            {item}
          </a>
        ))}
      </nav>
    </footer>
  );
}
