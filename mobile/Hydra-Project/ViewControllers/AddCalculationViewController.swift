//
//  AddCalculationViewController.swift
//  Hydra-Project
//
//  Created by Денис Хафизов on 26.02.2024.
//

import UIKit

final class AddCalculationViewController: UIViewController {
    
    private let frameButton = UIButton(title: "Каркас", titleColor: .white, backgroundColor: .darkGray)
    private let foundationButton = UIButton(title: "Фундамент", titleColor: .white, backgroundColor: .darkGray)
    private let roofButton = UIButton(title: "Крыша", titleColor: .white, backgroundColor: .darkGray)
    
    private let stackView = UIStackView()
    
    private var signOutButton = UIBarButtonItem()
    
    private let frameVC = UINavigationController(rootViewController: FrameViewController())

    override func viewDidLoad() {
        super.viewDidLoad()
        
        setupView()
        addSubview()
        setupLayout()
    }
    
    @objc
    private func singOutButtonPressed() {
        dismiss(animated: true)
    }
    
    @objc
    private func frameButtonPressed() {
        frameVC.modalPresentationStyle = .fullScreen
        present(frameVC, animated: true)
    }
}

//MARK: Setting view
private extension AddCalculationViewController {
    func setupView() {
        view.backgroundColor = .white
        
        title = "Выбор конструктивного элемента"
        signOutButton = UIBarButtonItem(title: "Назад", style: .plain, target: self, action: #selector(singOutButtonPressed))
        signOutButton.tintColor = .mainRed()
        navigationItem.leftBarButtonItem = signOutButton
        
        frameButton.addTarget(self, action: #selector(frameButtonPressed), for: .touchUpInside)
    }
}

//MARK: Setting
private extension AddCalculationViewController {
    func addSubview() {
        [
            stackView
        ].forEach {
            view.addSubview($0)
        }
        
        stackView.addArrangedSubview(frameButton)
        stackView.addArrangedSubview(foundationButton)
        stackView.addArrangedSubview(roofButton)
        stackView.axis = .vertical
        stackView.distribution = .fill
        stackView.spacing = 15
    }
}

//MARK: Layout
private extension AddCalculationViewController {
    func setupLayout() {
        [
        stackView
        ].forEach {
            $0.translatesAutoresizingMaskIntoConstraints = false
        }
        
        NSLayoutConstraint.activate([
            stackView.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            stackView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            stackView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16)
        ])
    }
}
