import logo from '../assets/logo.png';
import { SearchIcon, UserIcon } from './Icons';

const navItems = ['首页', '工具中心', '学习指南', '数据资源', '考研专区', '关于我们'];

export function TopNav() {
  return (
    <header className="top-nav">
      <div className="nav-inner">
        <a className="brand" href="#main-content" aria-label="材料科学工具集首页">
          <img src={logo} alt="畅研" />
          <span>材料科学工具集</span>
        </a>

        <nav className="nav-links" aria-label="主导航">
          {navItems.map((item, index) => (
            <button className={index === 0 ? 'active' : ''} type="button" key={item}>
              {item}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <label className="search-box">
            <span className="sr-only">搜索工具或知识</span>
            <SearchIcon />
            <input type="search" placeholder="搜索工具或知识..." readOnly />
          </label>
          <button className="account-button" type="button">
            <UserIcon />
            <span>登录 / 注册</span>
          </button>
        </div>
      </div>
    </header>
  );
}
