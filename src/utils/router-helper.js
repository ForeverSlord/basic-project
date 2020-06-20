export function getMenus(routes) {
  const menus = [];
  routes.forEach((route) => {
    if (!route.meta || route.meta.hide) {
      return;
    }

    const menu = {
      key: route.name,
      title: route.meta.title,
      // order: route.meta.key,
      path: route.path,
      icon: typeof route.meta.menu === 'object' ? route.meta.menu.icon : undefined,
      parent: false
    };

    if (!route.meta.parent) {
      menus.push(menu);
    } else {
      const parent = deepFind(route.meta.parent, menus, 'key');
      if (!parent) {
        throw new Error(`未找到父菜单，请确定name: ${route.meta.parent}是否配置正确`);
      }

      menu.parent = parent.key;
      parent.children = parent.children || [];
      parent.children.push(menu);
    }
  });

  return menus;
}

export function deepFind(name, items, key = 'name') {
  for (let i = 0, len = items.length; i < len; i++) {
    const item = items[i];
    if (item[key] === name) {
      return item;
    }

    if (item.children) {
      const result = deepFind(name, item.children, key);

      if (result) {
        return result;
      }
    }
  }

  return null;
}
