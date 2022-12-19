/**
 * @Author linzeguang
 * @Date 2022-12-18 20:00:30
 * @LastEditTime 2022-12-19 11:06:26
 * @LastEditors linzeguang
 * @Description 自定义环境变量
 */

/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DB_PASSWORD: string;
  readonly PUBLIC_POKEAPI: string;
  // 更多环境变量…
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
