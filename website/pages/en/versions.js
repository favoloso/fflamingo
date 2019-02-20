/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary');

const Container = CompLibrary.Container;

const CWD = process.cwd();

const versions = require(`${CWD}/versions.json`);

function Versions(props) {
  const { config: siteConfig } = props;
  const latestVersion = versions[0] || 'next';
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${
    siteConfig.projectName
  }`;
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title} Versions</h1>
          </header>
          {/* <p>New versions of this project are released every so often.</p> */}
          <h3 id="latest">Versione corrente (Stable)</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <a href="">Documentazione</a>
                </td>
                <td>
                  <a href="">Note di Rilascio</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            This is the version that is configured automatically when you first
            install this project.
          </p>
          <h3 id="rc">Pre-release</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>master</th>
                <td>
                  <a href="">Documentazione</a>
                </td>
                <td>
                  <a href="">Note di Rilascio</a>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <p>Other text describing this section.</p> */}
          <h3 id="archive">Versioni Passate</h3>
          <table className="versions">
            <tbody>
              {versions.map(
                version =>
                  version !== latestVersion && (
                    <tr>
                      <th>{version}</th>
                      <td>
                        <a href="">Documentazione</a>
                      </td>
                      <td>
                        <a href="">Note di Rilascio</a>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
          <p>
            Le versioni precedenti sono disponibili su{' '}
            <a href={repoUrl}>GitHub</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}

module.exports = Versions;
