import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links:{
      github: "https://github.com/Azazel420",
      youtube: "https://www.youtube.com/@azazel42",
      bsky: "https://bsky.app/profile/azazel421.bsky.social",
      instagram: "https://www.instagram.com/azazel421/",
      tumblr: "https://www.tumblr.com/blog/azazel421",
      itchio: "https://azazel42.itch.io/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.frontmatter?.tags?.includes("blog"),
    }),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        // {
        //   Component: Component.Search(),
        //   grow: true,
        // },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    //Component.Explorer(),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        // {
        //   Component: Component.Search(),
        //   grow: true,
        // },
        { Component: Component.Darkmode() },
      ],
    }),
    //Component.Explorer(),
  ],
  right: [],
}
