//
//  ProfileViewController.swift
//  Hydra-Project
//
//  Created by Денис Хафизов on 26.02.2024.
//

import UIKit

final class ClientProfileViewController: UIViewController {
    
    private let clientNameLabel = UILabel(text: "Иванов Иван Иванович")
    private let addressLabel = UILabel(text: "г.Ульяновск, ул.Тестовая, д. 35-45")
    private let phoneLabel = UILabel(text: "тел. 8-900-000-00-00")
    
    private let clientInfoStackView = UIStackView()
    
    private let clientTableView = UITableView()
    
    private var addCalculationButton = UIBarButtonItem()
    private var signOutButton = UIBarButtonItem()
    private let deleteClientButton = UIButton(title: "Удалить клиента", titleColor: .white, backgroundColor: .mainRed())
    
    private var client = Client(name: "", surname: "", patronymic: "", phoneNumber: 0, email: "", address: "")


    override func viewDidLoad() {
        super.viewDidLoad()

        setupView()
        addSubview()
        setupLayout()
        updateClientInfo()
        deleteClientButton.addTarget(self, action: #selector(deleteClientButtonPressend), for: .touchUpInside)
    }
    
    private func updateClientInfo() {
        clientNameLabel.text = client.fullName
        addressLabel.text = client.address
        phoneLabel.text = "тел. +7 \(client.phoneNumber)"
    }
    
    private func showAlert(title: String, message: String, closeView: Bool) {
        let alert = UIAlertController(title: title, message: message, preferredStyle: .alert)
        
        let okAction = UIAlertAction(title: "OK", style: .default) { [unowned self] _ in
            if closeView {
                dismiss(animated: true)
            }
        }
        let cancelAction = UIAlertAction(title: "Отменить", style: .cancel)
        
        alert.addAction(okAction)
        alert.addAction(cancelAction)
        
        present(alert, animated: true)
    }

    
    func configure(client: Client) {
        self.client = client
    }
    
    @objc
    private func deleteClientButtonPressend() {
        StorageManager.shared.deleteClient(id: client.id)
        showAlert(title: "Удаление клиента.", message: "Вы действительно хотите удалить клиента \(client.fullName)?", closeView: true)
    }
    
    @objc
    private func addCalculationButtonPressend() {
        let addCalculatioVC = UINavigationController(rootViewController: AddCalculationViewController())
        addCalculatioVC.modalPresentationStyle = .fullScreen
        present(addCalculatioVC, animated: true)
    }
    
    @objc
    private func signOutButtonPressend() {
        dismiss(animated: true)
    }
}

//MARK: Setting view
private extension ClientProfileViewController {
    func setupView() {
        view.backgroundColor = .white
        
        title = "Клиент:"
        navigationController?.navigationBar.prefersLargeTitles = true
        
        clientTableView.delegate = self
        clientTableView.dataSource = self
        clientTableView.register(UITableViewCell.self, forCellReuseIdentifier: "cell")
        
        addCalculationButton = UIBarButtonItem(title: "Добавить расчет", style: .plain, target: self, action: #selector(addCalculationButtonPressend))
        navigationItem.rightBarButtonItem = addCalculationButton
        
        signOutButton = UIBarButtonItem(title: "Назад", style: .plain, target: self, action: #selector(signOutButtonPressend))
        navigationItem.leftBarButtonItem = signOutButton
    }
}

//MARK: Setting
private extension ClientProfileViewController {
    func addSubview() {
        [
            clientInfoStackView,
            clientTableView
        ].forEach {
            view.addSubview($0)
        }
        
        clientInfoStackView.addArrangedSubview(clientNameLabel)
        clientInfoStackView.addArrangedSubview(addressLabel)
        clientInfoStackView.addArrangedSubview(phoneLabel)
        clientInfoStackView.addArrangedSubview(deleteClientButton)
        clientInfoStackView.axis = .vertical
        clientInfoStackView.spacing = 5
        clientInfoStackView.distribution = .fill
    }
}

//MARK: Layout
private extension ClientProfileViewController {
    func setupLayout() {
        [
            clientInfoStackView,
            clientTableView
        ].forEach {
            $0.translatesAutoresizingMaskIntoConstraints = false
        }
        
        NSLayoutConstraint.activate([
            clientInfoStackView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            clientInfoStackView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            clientInfoStackView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16),
            
            clientTableView.topAnchor.constraint(equalTo: clientInfoStackView.bottomAnchor, constant: 16),
            clientTableView.leadingAnchor.constraint(equalTo: clientInfoStackView.leadingAnchor, constant: -16),
            clientTableView.trailingAnchor.constraint(equalTo: clientInfoStackView.trailingAnchor),
            clientTableView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
    }
}

//MARK: Table View DataSource
extension ClientProfileViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        5
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        cell.textLabel?.text = "Расчет №\(indexPath.row + 1)"
        
        return cell
    }
}

//MARK: Table View Delegate
extension ClientProfileViewController: UITableViewDelegate {
    
}
