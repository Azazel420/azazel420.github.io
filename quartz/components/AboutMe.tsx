import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const AboutMe: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={`${baseDir}/about-me!`} title="about me!">
        <img src={"/static/icons/aboutme.png"} width={30}></img>
      </a>
    </h2>
  )
}


export default (() => AboutMe) satisfies QuartzComponentConstructor
